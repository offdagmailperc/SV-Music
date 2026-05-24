import json
from yt_dlp import YoutubeDL
with YoutubeDL() as ydl:
  ydl.download("https://www.youtube.com/watch?v=3O07e-QNhgo")
