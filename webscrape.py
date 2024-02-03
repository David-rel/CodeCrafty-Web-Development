import requests
from bs4 import BeautifulSoup
from tqdm import tqdm
from urllib.parse import urljoin, urlparse
import json

# Function to check if the link is internal
def is_internal_link(link, base_url):
    return urlparse(link).netloc == urlparse(base_url).netloc

def is_pdf_link(link):
    return link.lower().endswith('.pdf')

# Function to get links from a given URL (Modified)
def get_links_from_url(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        for a_tag in soup.find_all('a', href=True):
            href = a_tag.get('href')
            full_url = urljoin(url, href)
            if full_url not in all_links and is_internal_link(full_url, initial_url) and not is_pdf_link(full_url):
                all_links.add(full_url)
                yield full_url
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")

# Function to scrape text from a URL
def scrape_text_from_url(url):
    try:
        if is_pdf_link(url):
            print(f"Skipping PDF: {url}")
            return None  # Skip PDF files
        response = requests.get(url)
        if response.status_code == 404:
            print(f"URL not found: {url}")
            return None
        soup = BeautifulSoup(response.content, 'html.parser')
        texts = soup.stripped_strings
        return ' '.join(texts)
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None

# Starting URL
initial_url = "https://codecrafty.dev/"
all_links = set([initial_url])

# Collecting all links with progress indication
links_to_process = [initial_url]
pbar_links = tqdm(total=len(all_links), desc="Collecting links")
while links_to_process:
    current_url = links_to_process.pop(0)
    pbar_links.set_description(f"Processing {current_url}")
    new_links = list(get_links_from_url(current_url))
    links_to_process.extend(new_links)
    pbar_links.total = len(all_links)
    pbar_links.update(1)
pbar_links.close()

# Saving all links to a file
with open('collected_links.txt', 'w') as file:
    for link in all_links:
        file.write(f"{link}\n")

# Reading links from the file
with open('collected_links.txt', 'r') as file:
    links = [line.strip() for line in file.readlines()]

# Scraping text from each link with progress indication
text_data = []
pbar_text = tqdm(total=len(links), desc="Scraping text from URLs")
for link in links:
    text = scrape_text_from_url(link)
    if text:
        text_data.append({'url': link, 'text': text})
    pbar_text.update(1)
pbar_text.close()

# Saving the scraped text data to a JSON file
with open('scraped_text_data.json', 'w') as json_file:
    json.dump(text_data, json_file, indent=4)
