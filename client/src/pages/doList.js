import React, {useState, useEffect} from "react";
import FormDolist from "../components/FormDolist/index";
import DolistResult from "../components/DolistResult/index";
import API from "../utils/API";


const Dolist = () => {

      
  const [doList, setDolist] = useState([]);

  const [doListInput, setDolistInput] = useState({
      title: "",
      date: new Date(),
      description: ""
  });


  const [showToDoListForm, setShowToDoListForm] = useState(false)


  const showHandler = () => {
   setShowToDoListForm(!showToDoListForm);
  }



  useEffect(() => {
    loadDolist();
  }, []);

  // Loads all DolistloadDolist  and sets them to DolistloadDolist
  const loadDolist = async () => {
    try {
      const response = await API.getAllDolist();
      setDolist(response.data);
      console.log('todos', response.data)
    } catch (error) {
      console.group("it can not load todo list");
      console.log(error);
      console.groupEnd();
    }
  };

// function for handling input change 
  const handleInputChange = event => {
      const { name, value } = event.target;
      setDolistInput({
        ...doListInput,
        [name]: value
      });
      console.log(doListInput)

    };

    const handleDateChange= date => {
      setDolistInput({
        ...doListInput,
       date : date
      });
      console.log(doListInput)

    };


    const handleFormSubmit = async event => {
      console.log("hi i am actually grabing the data")
      event.preventDefault();
      if (doListInput.title && doListInput.description) {
        try {
          await API.saveDolist({
            ...doListInput,
          });
          setDolistInput({
            title: "",
            date: new Date(),
            description: "",
          });
          loadDolist();
          console.log("hi i am success!!")
        } catch (error) {
          console.group("SUBMIT FORM");
          console.log(error);
          console.groupEnd();
        }
      }
    };

    


    return (
<React.Fragment>

    <div className = "section-toDoList">
            <div className="row">

            <div className="col-2-of-2">
                <button 
                    type="button"
                    className="btn btn--pink "
                    onClick= {showHandler}>
                        add your checklist
                </button>
            </div>

            </div>

          {showToDoListForm && 

            <div className="row">
                <FormDolist
                doListInput = {doListInput}
                handleInputChange = {handleInputChange}
                handleFormSubmit = {handleFormSubmit}
                handleDateChange = {handleDateChange}
                />

            </div> 
            }

            <div className="row">
            <div className="col-2-of-2">
                {doList.length ?
                <DolistResult
                doList={doList}
                loadDolist= {loadDolist}
                doListInput = {doListInput}
                setDolistInput = {setDolistInput}
                handleInputChange = {handleInputChange}/>: null}
            </div>
        </div>
    </div>
  </React.Fragment>
    
    )
    
}

export default Dolist;


 

