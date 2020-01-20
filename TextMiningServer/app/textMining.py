# importing stopwors from nltk library
import nltk

import nltk.corpus
#from google.colab import drive
#drive.mount('/content/gdrive')
from nltk.probability import FreqDist
nltk.download('punkt')
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer 
from nltk.stem import WordNetLemmatizer
nltk.download('wordnet')
nltk.download('stopwords')
a = set(stopwords.words('english'))





nltk.download('stopwords')



def findLineIndex(countWord,countDifferentWord):
    maxCount = max(countWord)
    lReturn  = 0
    maxCountDF = max(countDifferentWord)
    indexCount = []
    lcount = 0
    for value in countDifferentWord :
      if maxCountDF == value :
        indexCount.append(lcount)
      lcount += 1

    if len(indexCount)>1 :
      tabToCheck = []
      for value in indexCount :
        if countWord[value] == maxCount :
          lReturn = value
    else :
      lReturn = indexCount[0]

    return int(lReturn)


def getRulesAnswer(text,question) :

    #We split in lines
    myRulesTab =text.splitlines()

    #print(myRules)

    
    textTab = []
    for myRules in myRulesTab:
    #print(word_tokenize(myRules.lower()))
        textTab.append(word_tokenize(myRules.lower()))
    #print(text1)
    #print(textTab)
    textTabStopWords = []
    #a = set(stopwords.words('english'))
    for textTest in textTab:

        stopwords = [x for x in textTest if x not in a]
        textTabStopWords.append(stopwords)

    #print(textTabStopWords)



    pst = PorterStemmer()
    stemmingProcessTab =[]
    for line in textTabStopWords:
        lineToAdd =[]
        for word in line:
            #print('word : ' + word + ' stem word : ' +pst.stem(word))
            lineToAdd.append(pst.stem(word))
        stemmingProcessTab.append(lineToAdd)

    #print(stemmingProcessTab)

    questionToken = word_tokenize(question.lower())
    #print(text1)
    stopwordsQuestion = [x for x in questionToken if x not in a]


    stemmingProcessTabQuestion =[]
    for word in stopwordsQuestion:
        #print('word : ' + word + ' stem word : ' +pst.stem(word))
        stemmingProcessTabQuestion.append(pst.stem(word))


    print(stemmingProcessTabQuestion)

    countTab = []
    wordFoundTab = []
    count = 0
    WordFound = []

    for line in stemmingProcessTab:
        count = 0
        wordFound = []
        for word in line:
            if word in stemmingProcessTabQuestion:
                count +=1
                if word not in wordFound:
                    wordFound.append(word)
        #print('Recurrence : '+str(count))
        countTab.append(count)
        wordFoundTab.append(str(len(wordFound)))
        #print('different word found :' + str(len(wordFound)))
        #print('  ')

    return myRulesTab[findLineIndex(countTab,wordFoundTab)]
