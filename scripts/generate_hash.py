import itertools
import base64
import hashlib
import pymongo
from dotenv import load_dotenv
import os

load_dotenv()

MONGODB_URI = os.getenv('MONGO_URL')
DATABASE_NAME = os.getenv('DATABASE_NAME')
COLLECTION_NAME = os.getenv('COLLECTION_NAME')

client = pymongo.MongoClient(MONGODB_URI)
db = client[DATABASE_NAME]
collection = db[COLLECTION_NAME]

charset = base64.b64encode(bytes(range(256))).decode('utf-8')

combinations = []
for i in range(1, 8):
    combinations += itertools.product(charset, repeat=i)

for c in combinations:
    hash_value = hashlib.md5(''.join(c).encode('utf-8')).hexdigest()
    collection.insert_one({'hash': hash_value, 'is_available': True})
