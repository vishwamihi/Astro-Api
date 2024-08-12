import os
from requests import get
from bs4 import BeautifulSoup

def clear():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

clear()
uIG = input('Masukkan Username IG: ')
url = get(f"https://insta-stalker.com/profile/{uIG}")

# Check if the request was successful
if url.status_code != 200:
    print("Failed to retrieve data. Please check the username or try again later.")
    exit()

soup = BeautifulSoup(url.text, 'html.parser')

# Safely attempt to find elements, if not found, set to None
name = soup.find('h1', {'style': 'margin-bottom: 0; font-size: 22px; font-weight: 600;'})
des = soup.find('p', {'style': 'margin-top: 0; margin-bottom: 0; color: #212121;'})
info = soup.find('div', {'class': 'profile-info'})
si = soup.find('a', {'id': 'instagram-story-count'})
postingan = soup.find('p', {'style': 'max-height: 137px; overflow: hidden;'})

# Extract and clean text if element is found, otherwise set to 'N/A'
nama = name.text.strip() if name else 'N/A'
deskrip = des.text.strip() if des else 'N/A'
inpo = info.text.strip() if info else 'N/A'
story = si.text.strip() if si else 'N/A'
post = postingan.text.strip() if postingan else 'N/A'

# Display the results
print(f'Username: {uIG}')
print(f'Link: https://www.instagram.com/{uIG}')
print(f'Nama: {nama}')
print(f'Deskripsi: {deskrip}')
print(inpo)
print(f'Jumlah Story: {story}')
print(f'Postingan terbaru kata-kata: {post}')
