/**
 * Created by shaunthomas on 20/2/17.
 */

GET https://au-api.basiq.io/institutions

//example request

GET /institutions HTTP/1.1
Accept: application/json
Authorization: Bearer da189f7b-babd-43cf-bcf8-9a8f19110e91

HTTP/1.1 200 OK
Content-type: application/json
cache-control: no-cache, no-store

{
    "type": "list",
    "totalCount":186,
    "data": [
        {
            "type": "institution",
            "id": "AU00101",
            "links": {
                "self": "https://au-api.basiq.io/institutions/AU00101"
            }
        },
        {
            "type": "institution",
            "id": "AU00102",
            "links": {
                "self": "https://au-api.basiq.io/institutions/AU00102"

            }
        },
        {
            "type": "institution",
            "id": "AU00103",
            "links": {
                "self": "https://au-api.basiq.io/institutions/AU00103"
            }
        },
        {
            "type": "institution",
            "id": "AU00104",
            "links": {
                "self": "https://au-api.basiq.io/institutions/AU00104"
            }
        },

        {
            "type": "institution",
            "id": "AU00105",
            "links": {
                "self": "https://au-api.basiq.io/institutions/AU00105"
            }
        }
    ],

        "links": {
        "self": "https://au-api.basiq.io/instutitions?offset=1",
        "first": "https://au-api.basiq.io/institutions?offset=1",
        "prev": null,
        "next": "https://au-api.basiq.io/institutions?offset=2",
        "last": "https://au-api.basiq.io/institutions?offset=2",
    }
}