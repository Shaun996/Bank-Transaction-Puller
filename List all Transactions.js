/**
 * Created by shaunthomas on 20/2/17.
 */
GET https://au-api.basiq.io/connections/{connection.id}/transactions
    EXAMPLE REQUEST
GET /connection/4/transactions HTTP/1.1
Accept: application/json
Authorization: Bearer ZGExODlmN2ItYmFiZC00M2NmLWJjZjgtOWE4ZjE5MTEwZTkxOmU0MzE3ODU3LWNmOGYtNDNhZS04YzU1LWIwZTkyOWNhOTMzMA==
EXAMPLE RESPONSE
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-cache, no-store

{
    "type": "list",
    "totalCount": 982,
    "data": [
    {
        "type": "transaction",
        "id": "789",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/789"
        }
    },
    {
        "type": "transaction",
        "id": "790",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/790"
        }
    },
    {
        "type": "transaction",
        "id": "791",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/791"
        }
    },
    {
        "type": "transaction",
        "id": "792",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/792"
        }
    },
    {
        "type": "transaction",
        "id": "793",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/793"
        }
    },
    {
        "type": "transaction",
        "id": "794",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/794"
        }
    },
    {
        "type": "transaction",
        "id": "795",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/795"
        }
    },
    {
        "type": "transaction",
        "id": "796",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/796"
        }
    },
    {
        "type": "transaction",
        "id": "797",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/797"
        }
    },
    {
        "type": "transaction",
        "id": "798",
        "links": {
            "self": "https://au-api.basiq.io/connections/4/transactions/798"
        }
    }
],
    "links": {
    "self": "https://au-api.basiq.io/connections/4/transactions?offset=4",
        "next": "https://au-api.basiq.io/connections/4/transactions?offset=9"
}
}
