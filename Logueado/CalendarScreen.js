import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'


export default class HomeScreen extends Component{
    render(){
       
        return (
            
            <Calendar
            theme={{
                backgroundColor: '#51E4FE',
                calendarBackground: '#ffffff',
                arrowColor: '#51E4FE',
                monthTextColor: '#51E4FE',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textMonthFontWeight: 'bold', 
                textDayFontWeight: 'bold',
                textDayFontSize: 18,
                textMonthFontSize: 25,
                textDisabledColor: '#51E4FE'    
              }} 
                current={'2018-12-18'}
                minDate={'2018-12-1'}
                maxDate={'2020-12-31'}
                monthFormat={'yyyy MMM'}
                hideArrows={false}
                hideExtraDays={true}
                hideDayNames={true}
                onPressArrowLeft={substractMonth => substractMonth()}
                onPressArrowRight={addMonth => addMonth()}


               /*  const d1 = {key:'d1', color: 'red', selectedDotColor: 'blue'};
                    const d2 = {key:'d2', color: 'blue', selectedDotColor: 'blue'};
                    const d3 = {key:'d3', color: 'green'};
                markedDates={{
                    //'2018-12-25': {dots: [d1, d2, d3], selected: true, selectedColor: 'red'},
                    '2018-12-26': {dots: [d1, d2,d3], disabled: true},
                  }} 
                  markingType={'multi-dot'} //Multiples redondeos abajo  */
                  
               /*  markedDates={
                    {'2018-12-21': {startingDay: true, color: 'green'},
                     '2018-12-22': {color: 'green'},
                     '2018-12-23': {endingDay: true, color: 'green'},
                    }}
                  markingType={'period'} //Periodos */


                 markedDates={{
                    '2018-12-27': {selected: true,  selectedColor: '#51E4FE'},
                    '2018-12-25': {selected: true,  selectedColor: '#51E4FE'}
                  }}   //Redondeo grande en el día
                /> 
                
            

        );
    }

}

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#3498db',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
