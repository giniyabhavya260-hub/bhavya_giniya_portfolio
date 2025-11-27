import 'package:flutter/cupertino.dart';
import 'package:get/get_state_manager/src/simple/get_controllers.dart';

class HomeController extends GetxController {
  final scrollController = ScrollController();

  final sectionKeys = List.generate(6, (index) => GlobalKey());

  void scrollToSection(int index) {
    Scrollable.ensureVisible(
      sectionKeys[index].currentContext!,
      duration: const Duration(milliseconds: 600),
      curve: Curves.easeInOut,
    );
  }
}
