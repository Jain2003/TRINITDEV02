import requests

def calculate_website_data(url):
    response = requests.get(url)
    data_received = len(response.content)
    data_sent = len(response.request.body or '') + len(response.request.headers)
    return (data_received, data_sent)

data_received, data_sent = calculate_website_data('https://latitudetechnolabs.com/pyscript-run-python-code-in-html/#:~:text=Use%20the,Python%20code%20inside%20the%20tag.&text=After%20that%20you%20can%20pass%20the%20Python%20file%20directly.&text=It%20will%20create%20a%20widget.')
print("Data received:", data_received, "bytes")
print("Data sent:", data_sent, "bytes")

# from datetime import datetime as dt

# def format_date(dt_, fmt="%m/%d/%Y, %H:%M:%S"):
#     return f"{dt_:{fmt}}"

# def now(fmt="%m/%d/%Y, %H:%M:%S"):
#     return format_date(dt.now(), fmt)

# def remove_class(element, class_name):
#     element.element.classList.remove(class_name)

# def add_class(element, class_name):
#     element.element.classList.add(class_name)