from utilities.db.db_manager import dbManager


class Question:
    @staticmethod
    def get_questions():
        return dbManager.fetch(f"SELECT * FROM qa")