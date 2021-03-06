import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux"
import DatePicker from "react-datepicker";
import API from "../../utils/API";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFemale,
    faMale,
    faLocationArrow,
    faDollarSign,
   } from "@fortawesome/free-solid-svg-icons";
const SurveyForm = (
  {
    onchangeSurveyHandler,
    handleDateSurvey,
    handleSubmitProfile ,
    loadWeddingProfile ,
    surveyInput,
  }
) => {
  const result = useSelector (state => state.auth.user)
  console.log( "this is result", result)
    return( 
      
      <div className="ToDoList">
          <div className="ToDoList__form">
            <form className = " form-toDoList">
                <div className="form-toDoList__group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form__icon fa-2x" icon={faFemale} />
                      </span>
                    </div>
                    <input
                        id="bride"
                        name= "brideName"
                        value = {surveyInput.name}
                        onChange={onchangeSurveyHandler}
                        type="text"
                        className="form-control form-toDoList__input"
                        placeholder="Bride Name"
                    />
                    <label className ="Dolist-label" htmlFor="bride"> Bride Name</label>
                </div>
                
                <div className="form-toDoList__group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form__icon fa-2x" icon={faMale} />
                      </span>
                    </div>
                    <input
                        id="groom"
                        name= "groomName"
                        value = {surveyInput.name}
                        onChange={onchangeSurveyHandler}
                        type="text"
                        className="form-control form-toDoList__input"
                        placeholder="Groom Name"
                    />
                    <label className ="Dolist-label" htmlFor="groom"> Groom Name</label>
                </div>
                                
                <div className="form-toDoList__group input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon className="form__icon fa-2x" icon={faLocationArrow} />
                      </span>
                    </div>
                    <input
                        id="location"
                        name= "location"
                        value = {surveyInput.name}
                        onChange={onchangeSurveyHandler}
                        type="text"
                        className="form-control form-toDoList__input"
                        placeholder="Location"
                    />
                    <label className ="Dolist-label" htmlFor="location"> Location</label>
                </div>
                <div className="form-toDoList__group input-group">
                  <DatePicker
                    selected={surveyInput.date}
                    onChange={date => handleDateSurvey(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    id="date"
                    className="form-control form-toDoList__input"
                  />
                   <label className ="Dolist-label" htmlFor="date"> Date</label>
                </div>
                
                <div className="form__group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        <FontAwesomeIcon className="form__icon fa-2x" icon={faDollarSign} />
                        </span>
                    </div>
                    <input 
                    id="totalBudget"
                    name= "totalBudget"
                    type="number"
                    placeholder="Total Budget"
                    className="form__input"
                    value = {surveyInput.name}
                    onChange={onchangeSurveyHandler}
                    required/>
                    <label htmlFor="totalBudget" className="form__label">Total Budget</label>
                
                </div>
                <button 
                //   disabled={!(doListInput.title && doListInput.description)}
                   onClick= {handleSubmitProfile}
                  className="btn btn btn--pink-toDoList">
                    done!
                </button>
            
          </form>
        </div>
    </div>
    )
}
export default SurveyForm;
