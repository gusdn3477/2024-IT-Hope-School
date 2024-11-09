import random
import json
import json_util.json_io as json_io

def change_stock(id):
    userData = json_io.json_file_to_dict()
    mul1 = random.randint(-200, 200)
    mul2 = random.randint(-500, 500)
    money1 = random.randint(100000, 200000)
    money2 = random.randint(100000, 300000)
    add1 = round(mul1 / 100, 1)
    add2 = round(mul2 / 100, 1)

    userData[id]["stock"]["NDVA"] = max(int(userData[id]["stock"]["NDVA"] + money1 * add1), 50000)
    userData[id]["stock"]["DSL"] = max(int(userData[id]["stock"]["DSL"] + money2 * add2), 100000)
    print("가격 변동")
    print(f"NDVA: {userData[id]["stock"]["NDVA"]}\nDSL: {userData[id]["stock"]["DSL"]}")
    json_io.dict_to_json_file(userData)

    return {"success": True, 'data': userData[id]}

def buy_stock(id, stock_name, buy_num):
    # json_file_to_dict 함수를 호출하여 userData를 가져옴
    userData = json_io.json_file_to_dict()
    if stock_name == "NDVA":
        if buy_num > userData[id]["total_shares"]["NDVA"]:
            return {'success': False}
        else:
            if userData[id]["money"] < userData[id]["stock"]["NDVA"] * buy_num:
                return {'success': False}
            else:
                userData[id]["money"] -= userData[id]["stock"]["NDVA"] * buy_num
                userData[id]["total_shares"]["NDVA"] = max(int(userData[id]["total_shares"]["NDVA"] - buy_num), 0)
                userData[id]["player_shares"]["NDVA"] += buy_num

    elif stock_name == "DSL":
        if buy_num > userData[id]["total_shares"]["DSL"]:
            return {'success': False}
        else:
            if userData[id]["money"] < userData[id]["stock"]["DSL"] * buy_num:
                return {'success': False}
            else:
                userData[id]["money"] -= userData[id]["stock"]["DSL"] * buy_num
                userData[id]["total_shares"]["DSL"] = max(int(userData[id]["total_shares"]["DSL"] - buy_num), 0)
                userData[id]["player_shares"]["DSL"] += buy_num

    # 업데이트된 데이터를 저장
    json_io.dict_to_json_file(userData)
    return {"success": True, 'data': userData}

def sell_stock(id, stock_name, sell_num):
    # json_file_to_dict 함수를 호출하여 userData를 가져옴
    userData = json_io.json_file_to_dict()

    if stock_name == "NDVA":
        if sell_num > userData[id]["player_shares"]["NDVA"]:
            return {'success': False}
        else:
            userData[id]["player_shares"]["NDVA"] -= sell_num
            userData[id]["money"] += userData[id]["stock"]["NDVA"] * sell_num
            userData[id]["total_shares"]["NDVA"] += sell_num
    
    elif stock_name == "DSL":
        if sell_num > userData[id]["player_shares"]["DSL"]:
            return {"success": False}
        else:
            userData[id]["player_shares"]["DSL"] -= sell_num
            userData[id]["money"] += userData[id]["stock"]["DSL"] * sell_num
            userData[id]["total_shares"]["DSL"] += sell_num

    # 업데이트된 데이터를 저장
    json_io.dict_to_json_file(userData)
    return {"success": True, 'data': userData[id]}

def load_userData():
    with open("user_info.json", "r") as f:
        userData = json.load(f)
    return userData

def dump_userData(userData):
    with open("user_info.json", "w") as f:
        json.dump(userData, f, indent=4)
