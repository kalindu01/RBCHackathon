import json

bp_file = open('business_profile.csv')

result = dict()

line = bp_file.readline()
    
#array1 = line.split('|')

#result1['Name'] = array1[0]
#result1['Field'] = array1[1]
#result1['Phone number'] = array1[3]
#result1['Description'] = array1[4]
#result1['Revenue'] = array1[5]
#result1['Revenue growth'] = array1[6]
#result1['Number of employees'] = array1[7]
#result1['Adress'] = array1[8].strip('\n')

#line = bp_file.readline()

#result2 = dict()

#array2 = line.split('|')

#result2['Name'] = array2[0]
#result2['Field'] = array2[1]
#result2['Phone number'] = array2[3]
#result2['Description'] = array2[4]
#result2['Revenue'] = array2[5]
#result2['Revenue growth'] = array2[6]
#result2['Number of employees'] = array2[7]
#result2['Adress'] = array2[8].strip('\n')

#line = bp_file.readline()

#result3 = dict()

#array3 = line.split('|')

#result3['Name'] = array3[0]
#result3['Field'] = array3[1]
#result3['Phone number'] = array3[3]
#result3['Description'] = array3[4]
#result3['Revenue'] = array3[5]
#result3['Revenue growth'] = array3[6]
#result3['Number of employees'] = array3[7]
#result3['Adress'] = array3[8].strip('\n')

#line = bp_file.readline()

#result4 = dict()

#array4 = line.split('|')

#result4['Name'] = array4[0]
#result4['Field'] = array4[1]
#result4['Phone number'] = array4[3]
#result4['Description'] = array4[4]
#result4['Revenue'] = array4[5]
#result4['Revenue growth'] = array4[6]
#result4['Number of employees'] = array4[7]
#result4['Adress'] = array4[8].strip('\n')

#line = bp_file.readline()

#result5 = dict()

#array5 = line.split('|')

#result5['Name'] = array5[0]
#result5['Field'] = array5[1]
#result5['Phone number'] = array5[3]
#result5['Description'] = array5[4]
#result5['Revenue'] = array5[5]
#result5['Revenue growth'] = array5[6]
#result5['Number of employees'] = array5[7]
#result5['Adress'] = array5[8].strip('\n')


#print (json.dumps(result1, indent=4, separators=(',', ': ')) 
       #+ ',' + json.dumps(result2, indent=4, separators=(',', ': '))
       #+ ',' + json.dumps(result2, indent=4, separators=(',', ': '))
       #+ ',' + json.dumps(result3, indent=4, separators=(',', ': '))
       #+ ',' + json.dumps(result4, indent=4, separators=(',', ': '))
       #+ ',' + json.dumps(result5, indent=4, separators=(',', ': ')))

str_res = ''

for line in bp_file:
    
    array = line.split('|')
    result['Name'] = array[0]
    result['Field'] = array[1]
    result['Phone number'] = array[3]
    result['Description'] = array[4]
    result['Revenue'] = array[5]
    result['Revenue growth'] = array[6]
    result['Number of employees'] = array[7]
    result['Adress'] = array[8].strip('\n') 
    
    str_res = (str_res + json.dumps(result, indent=4, separators=(',', ': '))
                   + ',') 
str_res = str_res[:-1]
    
print str_res  


ir_file = open('investment_request.csv')

result = dict()

str_res = ''

for line in ir_file:
    
    array = line.split('|')
    
    result['Date'] = array[0]
    
    result['Name'] = array[1]
    
    result['Money Needed'] = array[2]
    
    result['Percentage to Trade'] = array[3].strip('\n')

    str_res = (str_res + json.dumps(result, indent=4, separators=(',', ': '))
               + ',')

str_res = str_res[:-1]

print str_res






    #result1 = result1 + ('{' + 'Name:' + array[0] + ', ' 
              #+ 'Field:' + array[1] + ', '
              #+ 'Phone number:' + array[3] + ', '
              #+ 'Description:' + array[4] + ', '
              #+ 'Revenue:' + array[5] + ', '
              #+ 'Revenue growth:' + array[6] + '%, '
              #+ 'Number of employees:' + array[7] + ', '
              #+ 'Address:' + array[8].strip('\n') + '}\n')

#result1 = result1[:-1] + '</ul>\n'

#print(result1)

#ir_file = open('investment_request.csv')

#result2 = '<ul>'

#for line in ir_file:
    
    #array = line.split('|')
    
    #result2 = result2 + ('<li>' + 'Date:' + array[0] + ', ' 
              #+ 'Name:' + array[1] + ', '
              #+ 'Money needed:' + array[2] + ', '
              #+ 'Percentage to trade:' + array[3].strip('\n') + '</li>\n')

#result2 = result2[:-1] + '</ul>\n'
       
#print(result2)
    
bp_file.close()
#ir_file.close()