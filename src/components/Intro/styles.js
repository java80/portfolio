import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  App: {
    textAlign: "left",
  },
  mainContainer: {
    width: "100%",
    margin: "0",
    backgroundColor:"#f8f9fc",
    paddingTop:"60px",
    paddingBottom:"60px",

  },
  image: {
    borderRadius: "100%",
    padding: "0",
    border: "14px solid #fff",
    width: "394px",
    height: "394px",
    boxShadow:
      "0 20px 40px rgb(0 0 0 / 10%), 0 20px 40px hsl(0deg 0% 100% / 15%)",
    // margin: '30%',
  },

  introContainer: {
    backgroundColor: "#f8f9fc",
  },
  intro:{
    textAlign:"left"
  },

  welcomeText: {
    color: "#1f1f25",
    fontSize: "15px",
    textTransform: "uppercase",
    letterSpacing: "4px",
    display: "block",
    marginBottom: "20px",
  },
  name: {
    fontSize: "54px",
    lineHeight: "68px",
  },

  profession: {
    fontSize: "54px",
    lineHeight: "68px",
    color: "#f9004D",
  },

  location: {
    fontSize: "54px",
    lineHeight: "68px",
  },
}));
