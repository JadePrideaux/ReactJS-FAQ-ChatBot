import requests


def test():
  resp = requests.post("http://127.0.0.1:5000/ask", json={"question": "question"})
  print(resp.status_code, resp.json())

if __name__ == "__main__":
  test()
