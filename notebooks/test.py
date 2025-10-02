import requests

resp = requests.post("http://127.0.0.1:5000/ask", json={"question": "What is React?", "top_k": 3})
print(resp.json())
