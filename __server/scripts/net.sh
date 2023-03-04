URL="http://localhost:3000"
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlvdWt3aGQiLCJwYXNzd29yZCI6IiQyYiQxMCRrS2RhRC9Rd1UvL0FDb3F6N29CYWNlcU55d09pVVg0LnVxZlZRVG52eGdtQm5zZmwyL3RudSIsInRva2VuIjpudWxsLCJpYXQiOjE2Nzc5Mjc1NjQsImV4cCI6MTY3NzkzMTE2NH0.JcsfrOijvwM5XxblgglZm3Iy0wA1D3quP-m9K2wc_D4"
 
curl -X POST -H "Content-Type: application/json" "$URL/login" -d '{ "username": "youkwhd", "password": "youkwhd" }'
# curl -X GET -H "Authorization: Bearer $TOKEN" "$URL/content"