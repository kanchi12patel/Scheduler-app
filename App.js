import './App.css';
import {
  Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, RecurrenceEditor,
  ViewsDirective, ViewDirective, TimelineViews, TimelineMonth, DragAndDrop, Resize
} from '@syncfusion/ej2-react-schedule'

import { TreeViewComponent , DragAndDropEventArgs } from '@syncfusion/ej2-react-navigations';

function App() {
  const EventSettingsModel = [
  
  ];

  const treeViewData = [
    {
      id: 1,
      Name: 'kanchi patel'
    },
    {
      id: 2,
      Name: 'Soumya shah'
    },
    {
      id: 3,
      Name: 'Kaival mehta'
    },
    {
      id: 4,
      Name: 'Krushna parikh'
    },
    {
      id: 5,
      Name: 'Saloni dave'
    },
    {
      id: 6,
      Name: 'Alaya desai'
    },
    {
      id: 7,
      Name: 'Krishna '
    },
    {
      id: 8,
      Name: 'Deeksha dandekar'
    },
    {
      id: 9,
      Name: 'Tanya raval'
    },
    {
      id: 10,
      Name: 'Jinisha Deshmukh'
    }
  ]
  return (
    <>
      <div className="sch-title" >APPOINTMENT SCHEDULER</div>
      <div className="sch-component">
        <ScheduleComponent
          currentView='Month'
          eventSettings={{ dataSource: EventSettingsModel }}
          selectedDate={new Date(2022, 1, 11)}
        >
          <ViewsDirective>
            <ViewDirective
              option='Week'
              displayName='week'
              interval={2}
            />
            <ViewDirective
              option='Day'
              displayName='Day '
              interval={7}
              startHour='03:00'
              endHour='18:00'
            />
            <ViewDirective
              option='Month'
              showWeekNumber={true}
              showWeekend={false}
            />
            <ViewDirective
              option='TimelineMonth'
              
            />
             <ViewDirective
              option='TimelineViews'
              interval={1}
            />
          </ViewsDirective>
          <Inject services={
            [Day, Week, WorkWeek, Month, Agenda, TimelineViews, TimelineMonth, DragAndDrop, Resize]} />
        </ScheduleComponent>
      </div>
      <div className="tree-title">PATIENTS NAME</div>
      <div className="tree-component">
        <TreeViewComponent allowDragAndDrop={true} fields={{dataSource: treeViewData, id: 'id', text:'Name'}} />
      </div>
    </>
  );
}

export default App;
