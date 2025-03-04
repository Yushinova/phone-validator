"use client"
import { useRef, useState, useEffect } from "react";
import { validatePhone } from "../validator/validator";
//компонент функциии
export function PhoneValidator(props) {
    let nRef = useRef(null);
    //чтобы при начале работы не срабатывала валидация
    let isStart=true;
    // инициалиазция state-ов
    let [result, setResult] = useState("");
    //стиль для формы
    let styles = {
      width: "300px",
      marginBottom: "5px"
    };
  //функция проверки телефона
  function validatePhoneNumber() {
    if(!validatePhone(nRef.current.value)){
      setResult("Не верный формат ввода! Пример ( +X(XXX)XXX-XX-XX )")
      return
    }
    setResult("Ввод верный")
  }
  // инициализация изначального значения input
  useEffect(() => {
    // на момент срабатывания данного колбэка 
    // уже сработал return и nRef привязался к input-у
    
    if(isStart){
      nRef.current.value=""
    }
    else{
      validatePhoneNumber();
      //сбрасываем флаг
      isStart=false
    }
  }, []);
  
   // обработчик отправки формы
   function onFormSubmit(event) {
    event.preventDefault();
    validatePhoneNumber();
  
  }
    return(
      <div className="container-sm">
          {/* форма валидатора*/}
          <form onSubmit={onFormSubmit}>
              {/* поле ввода телефона */}
              <label htmlFor="phone" className="form-label">Введите номер телефона:</label>
              <input type="tel" id="phone" required ref={nRef}
              className="form-control" placeholder="+X(XXX)XXX-XX-XX" style={styles}/>
              {/* кнопка отправки формы */}
              <button type="submit" className="btn btn-primary"> Проверить</button>
            </form>
            {/* вывод результата */}
            <p>{result}</p>
      </div>
    );
    
  }