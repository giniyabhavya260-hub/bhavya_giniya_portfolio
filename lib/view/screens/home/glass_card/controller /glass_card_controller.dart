import 'package:get/get.dart';

class GlassCardController extends GetxController {
  RxBool isHover = false.obs;

  void setHover(bool value) {
    isHover.value = value;
  }
}
