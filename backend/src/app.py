from flask import Flask
import cv2
import os
import time
from requests import Response
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = Flask(__name__)
# cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)


def findDes(image):
        desList=[]
        for img in image:
            kp, des =orb.detectAndCompute(img,None)
            desList.append(des)
        return desList

def findId(img,desList,thres=22) :
    kp1 ,des2 = orb.detectAndCompute(img,None)
    bf=cv2.BFMatcher()
    matchList =[]
    finalVal = -1
    try:

        for des in desList :
            matches=bf.knnMatch(des,des2,k=2)
            good =[]

            for m,n in matches :
                if m.distance < 0.75*n.distance :
                    good.append([m])
            matchList.append(len(good))
    except:
        pass
    #  print(matchList)
    if len(matchList)!=0:
        if max(matchList) > thres:
            finalVal=matchList.index(max(matchList))
    return finalVal




@app.route("/test")
def tested():
    desList = findDes(image)
    print(len(desList))

    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
    while True :
        success, img2 =cap.read()
        imgOrginal= img2.copy()
        img2 =cv2.cvtColor(img2,cv2.COLOR_BGR2GRAY)
        id=findId(img2,desList)
        if id!=-1:
            cv2.putText(imgOrginal,className[id],(50,50),cv2.FONT_HERSHEY_COMPLEX,1,(0,0,255),2)
            print(className[id])
            collection = db.collection('product_details') 
            doc = collection.document()
            doc.set({
                u'product': className[id].split('_')[0],
                u'price': msbase2.get(className[id].split('_')[0])
            })
            print('waiting for next ...')
            time.sleep(4)

        cv2.imshow('img2',imgOrginal)
        cv2.waitKey(1)


# def video():
#     return Response(tested(),mimetype='multipart/x-mixed-replace; boundary=frame')






if __name__=="__main__":

    cred = credentials.Certificate('C:/Users/RAMANI/vscodeprojects/asiet/backend/src/swiftcart-37bdd-firebase-adminsdk-v02nv-e16f8bb596.json')
    firebase_admin.initialize_app(cred)
    db = firestore.client() 
   

    imgFolder = os.path.join(r'C:\Users\RAMANI\vscodeprojects\asiet\backend\src','static','Imagetrains')
    app.config['UPLOAD_FOLDER'] = imgFolder
    print(imgFolder)

    path=app.config['UPLOAD_FOLDER']
    print(path)
    print(os.path.join(path))
    image=[]
    className=[]
    myList = os.listdir(path)
    print("list:",myList)
    print('Total number of classdetected',len(myList))
    
    for cl in myList :
        imgcur=cv2.imread(f'{path}/{cl}',0)
        image.append(imgcur)
        className.append(os.path.splitext(cl)[0])

    msbase2 = {}
    for item in className:
        item_value = item.split('_')
        msbase2[item_value[0]] = item_value[1]

    print(className)
    print(msbase2)

    orb=cv2.ORB_create(nfeatures=1000)


    app.run(debug=True)
