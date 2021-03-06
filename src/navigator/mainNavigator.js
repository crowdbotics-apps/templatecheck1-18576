import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile73867Navigator from '../features/UserProfile73867/navigator';
import Tutorial73866Navigator from '../features/Tutorial73866/navigator';
import NotificationList73838Navigator from '../features/NotificationList73838/navigator';
import Settings73837Navigator from '../features/Settings73837/navigator';
import Settings73829Navigator from '../features/Settings73829/navigator';
import UserProfile73827Navigator from '../features/UserProfile73827/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile73867: { screen: UserProfile73867Navigator },
Tutorial73866: { screen: Tutorial73866Navigator },
NotificationList73838: { screen: NotificationList73838Navigator },
Settings73837: { screen: Settings73837Navigator },
Settings73829: { screen: Settings73829Navigator },
UserProfile73827: { screen: UserProfile73827Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
