import sqlite3

# Create database `articles`
db = sqlite3.connect('articles.db')
db.execute(
    "CREATE TABLE articles ("
    "id INTEGER PRIMARY KEY, "
    "title VARCHAR(255) NOT NULL, "
    "description TEXT NOT NULL"
    ")"
)
# Create three sample articles in `articles` database
db.execute(
    "INSERT INTO articles (title, description) "
    "VALUES ('Hint #1', 'Focus on your web application!')"
)
db.execute(
    "INSERT INTO articles (title, description) "
    "VALUES ('Hint #2', 'Just write code. This kickstart kit helps you!')"
)
db.execute(
    "INSERT INTO articles (title, description) "
    "VALUES ('Hint #3', 'Do not forget to press Star & Watch on GitHub!')"
)
# Save all
db.commit()
