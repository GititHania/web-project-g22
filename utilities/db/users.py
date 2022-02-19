from utilities.db.db_manager import dbManager


class User:
    @staticmethod
    def get_user(email):
        return dbManager.fetch(f"SELECT * FROM customers WHERE Email='{email}'")

    @staticmethod
    def get_user_points(email):
        return dbManager.fetch(f"SELECT Points FROM customers WHERE Email='{email}'")

    @staticmethod
    def insert_user(email, full_name, password, phone_num):
        return dbManager.commit(
            f"INSERT INTO customers (Email, Password, FullName, PhoneNumber) VALUES ('{email}', '{password}', '{full_name}', '{phone_num}')")

    @staticmethod
    def update_Info(email, full_name, password, phone_num):
        return dbManager.commit(f"UPDATE `group22`.`customers` SET `Password` ='{password}', `FullName` = '{full_name}', `PhoneNumber` = '{phone_num}' WHERE `Email` = '{email}';")

    @staticmethod
    def delete_user(email):
        return dbManager.commit(f"DELETE FROM customers WHERE email='{email}'")

    @staticmethod
    def update_points(cust_email, new_amount):
        return dbManager.commit(f"UPDATE `group22`.`customers` SET `Points`='{new_amount}' WHERE email='{cust_email}'")

