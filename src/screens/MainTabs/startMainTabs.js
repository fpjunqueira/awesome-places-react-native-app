import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

const startTabs = () => {
    const isAndroid = Platform.OS === 'android';
    Promise.all([
        Icon.getImageSource(isAndroid ? "md-map" : "io-map", 30),
        Icon.getImageSource(isAndroid ? "md-share-alt" : "ios-share", 30),
        Icon.getImageSource(isAndroid ? "md-menu" : "ios-menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            tabsStyle: {
                tabBarSelectedButtonColor: 'orange'
            },
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawerScreen"
                }
            },
            appStyle: {
                tabBarSelectedButtonColor: 'orange'
            },
        });
    });
}

export default startTabs;
