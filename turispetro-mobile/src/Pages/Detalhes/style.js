import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  body: {
      
    flex: 1,
  },

header: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 35,
  marginLeft: 20,
  marginBottom: 20,
},

  img: {
    display: "flex",
    
   
  },
  fundo: {
    flex: 1,
    height: 300,
  },

  txt: {
    textAlign: "left",
    marginBottom: 5,
    fontSize: 11,
    color: "#333333",
    marginLeft: 15,

  },

  txt2: {
    marginBottom: 5,
    fontSize: 11,
    color: "#333333",
     marginLeft: 15,
     marginRight: 10,
    textAlign: "center",

  },
  txt3: {
      color: "#ffff",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    
  },

  txt4: {
    color: "#FF296A",
    fontSize: 20,

  },

  div: {
    flexDirection: "row",
    marginTop:15,
    marginLeft: 15,
    alignItems: "center",
    marginRight: 25,
   width: 300,

  },
  div2: {
    flexDirection: "row",
    alignItems: "center",
    

  },
  div3: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    

  },
  div4: {
    marginTop: 400,
    alignItems: "flex-start",
    marginLeft: 15,
    
  },

  div5: {
    flexDirection: "row",
    marginLeft: 85,
    marginTop: 410,
    
  },

  div6: {
    flexDirection: "row",
   marginLeft: 290,

  },

div7: {
  flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",

  },

  icon: {
    marginLeft: 140,
    flexDirection: "row",
    marginRight: 10,   
    

  },

  icon2: {
    marginLeft: 35,
      
    

  },
 
});

export default HomeStyle;