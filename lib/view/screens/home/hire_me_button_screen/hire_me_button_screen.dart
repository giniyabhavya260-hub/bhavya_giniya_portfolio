import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:url_launcher/url_launcher.dart';

class HireMeButton extends StatelessWidget {
  const HireMeButton({super.key});

  void _launchEmail() async {
    final Uri emailUri = Uri(
      scheme: 'mailto',
      path: 'bhavyaginiya@gmail.com',
      queryParameters: {'subject': 'Hiring Request', 'body': 'Hello Bhavya,'},
    );

    if (await canLaunchUrl(emailUri)) {
      await launchUrl(emailUri, mode: LaunchMode.externalApplication);
    } else {
      debugPrint('Could not launch $emailUri');
    }
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _launchEmail,
      style: ElevatedButton.styleFrom(
        backgroundColor: Colors.blue,
        padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 16),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      ),
      child: const Text(
        "Hire Me",
        style: TextStyle(fontSize: 18, color: Colors.white),
      ),
    ).animate().fadeIn(duration: 600.ms).moveY(begin: 20, duration: 600.ms);
  }
}
