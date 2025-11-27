import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../view/screens/home/home_screen.dart';

class RouteHelpers {
  static const String homeScreen = '/homeScreen';

  static List<GetPage<dynamic>> routes = <GetPage<dynamic>>[
    GetPage<dynamic>(name: homeScreen, page: () => getRoute(HomeScreen())),
  ];

  static Widget getRoute(final Widget navigateTo) {
    return navigateTo;
  }
}
