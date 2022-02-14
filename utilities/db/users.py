from utilities.db.db_manager import dbManager


class Users:
    @staticmethod
    def get_user(email):
        return dbManager.fetch(f"SELECT * FROM customers WHERE Email='{email}'")

    @staticmethod
    def insert_user(email, full_name, password, phone_num):
        return dbManager.commit(
            f"INSERT INTO customers (Email, Password, FullName, PhoneNumber) VALUES ('{email}', '{password}', '{full_name}', '{phone_num}')")

    @staticmethod
    def update_password(user_email, password):
        return dbManager.commit(f"UPDATE customers SET password='{password}' WHERE Email={user_email}")

    @staticmethod
    def delete_user(email):
        return dbManager.commit(f"DELETE FROM customers WHERE email='{email}'")

