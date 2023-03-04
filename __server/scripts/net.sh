URL="http://localhost:3000"
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlvdWt3aGQiLCJwYXNzd29yZCI6IiQyYiQxMCRrS2RhRC9Rd1UvL0FDb3F6N29CYWNlcU55d09pVVg0LnVxZlZRVG52eGdtQm5zZmwyL3RudSIsInRva2VuIjpudWxsLCJpYXQiOjE2Nzc5MjMyOTIsImV4cCI6MTY3NzkyNjg5Mn0.L4m0Z-Sr9AG2JEVBd3a_CIZP-9zOSjbInS_E843cxEw"
 
# curl -X POST -H "Content-Type: application/json" "$URL/login" -d '{ "username": "youkwhd", "password": "youkwhd" }'
curl -X GET -H "Authorization: Bearer $TOKEN" "$URL/content"