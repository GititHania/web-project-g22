from utilities.db.db_manager import dbManager


class Message:
    @staticmethod
    def send_Msg(Name, email, phone, topic, msg):
        return dbManager.commit(f"INSERT INTO `group22`.`contacts` (`Name`, `email`, `phone`, `topic`, `msg`) VALUES ('{Name}','{email}','{phone}','{topic}','{msg}')")
