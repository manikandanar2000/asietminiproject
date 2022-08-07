# msbase={"data": [
#     {
#     "product":"Boost",
#     "price":"5"

# },
# {
#     "product":"Lays",
#     "price":"10"

# },
# {
#     "product":"Ujala",
#     "price":"30"

# },
# {
#     "product":"Horlicks1",
#     "price":"15"

# },
# {
#     "product":"Boost",
#     "price":"10"

# }]
# }

# for s in msbase["data"]:
#     # print(s=='product')
msbase2={
   "Boost": {
    "product":"Boost",
    "price":"5"

},
"Lays":{
    "product":"Lays",
    "price":"10"

},
"Ujala":{
    "product":"Ujala",
    "price":"30"

},
"Horlicks1":{
    "product":"Horlicks1",
    "price":"15"

},
"Boost":{
    "product":"Boost",
    "price":"10"

}
}
cl="Boost"
print(msbase2.get(cl))    