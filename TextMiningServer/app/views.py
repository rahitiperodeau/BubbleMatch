from flask import Flask
from flask import render_template
from .textMining import getRulesAnswer
import requests

app = Flask(__name__)
 #from textMining import getRulesAnswer

@app.route('/')
def home():
    return "<b>There has been a change2 llllllllllllll</b>"


@app.route('/template')
def template():
     return render_template('home.html')


@app.route('/testAlgo')
def test():
    print('coucou')
    path = "./doc/demofile.txt"
    f = open(path, "r")
    print(f)

    #myRulesTab =f.readlines()
    myRules = 'email.'
    questions = 'Where may i register for NEO Cup 2015? '
    return getRulesAnswer(f,questions)

@app.route('/getResponseFromRules/<int:fileId>/<question>/')
def getResponseFromRules(fileId,question):
    print(fileId)
    myFile = requests.get('http://localhost:8090/downloadFile/' + str(fileId))
    print(myFile.content.decode('utf-8'))
    return getRulesAnswer(myFile.content.decode('utf-8'),question)


if __name__ == '__main__':
   app.run(host='0.0.0.0',port='5000')    