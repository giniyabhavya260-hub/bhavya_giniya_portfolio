import 'package:bhavya_giniya_portfolio/gen/assets.gen.dart';
import 'package:bhavya_giniya_portfolio/helpers/AppColors.dart';
import 'package:bhavya_giniya_portfolio/helpers/styles.dart';
import 'package:bhavya_giniya_portfolio/view/screens/home/glass_card/glass_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:gap/gap.dart';
import 'package:get/get_state_manager/get_state_manager.dart';
import 'package:url_launcher/url_launcher.dart';

import 'controller/home_controller.dart';
import 'hire_me_button_screen/hire_me_button_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return GetBuilder<HomeController>(
      init: HomeController(),
      builder: (HomeController c) {
        final isWide = MediaQuery.of(context).size.width > 900;

        return Scaffold(
          backgroundColor: Color(0xFF0F1122),
          appBar: AppBar(
            backgroundColor: AppColors.color1A1B27,
            elevation: 0,
            title: Text(
              "Bhavya Giniya",
              style: dmSansW800.copyWith(fontSize: 22, color: AppColors.white),
            ),
            actions: isWide ? _navButtons(c) : null,
          ),

          drawer: isWide
              ? null
              : Drawer(
                  backgroundColor: const Color(0xFF15172D),
                  child: _drawerNav(c),
                ),

          body: SingleChildScrollView(
            controller: c.scrollController,
            child: Column(
              children: [
                _section(c, 0, _hero(isWide)),
                _section(c, 1, _about(isWide)),
                _section(c, 2, _services()),
                _section(c, 3, _projects()),
                _section(c, 4, _skills(isWide)),
                _section(c, 5, _contact()),
                const Gap(40),
                Text(
                  "© 2025 • Bhavya Giniya • Flutter Developer",
                  style: TextStyle(color: Colors.white54, fontSize: 14),
                ),
                const Gap(40),
              ],
            ),
          ),
        );
      },
    );
  }
}

Widget _hero(bool isWide) {
  return Container(
    width: double.infinity,
    padding: EdgeInsets.symmetric(vertical: isWide ? 140 : 70, horizontal: 20),
    decoration: BoxDecoration(color: Color(0xFF0F1122)),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        CircleAvatar(
          radius: 90,
          backgroundColor: Colors.white,
          child: ClipOval(
            child: Image.asset(
              Assets.png.icImage.path,
              width: 180,
              height: 180,
              fit: BoxFit.cover,
            ),
          ),
        ).animate().fadeIn(duration: 600.ms).scale(duration: 700.ms),

        Gap(20),

        Text(
          "Hi, I'm Bhavya 👋",
          style: dmSansW800.copyWith(
            fontSize: isWide ? 40 : 32,
            color: AppColors.white,
          ),
        ).animate().fadeIn(),

        const Gap(10),

        Text(
          "Flutter Developer • GetX • Firebase • API",
          style: dmSansW500.copyWith(
            color: AppColors.color797979,
            fontSize: 18,
          ),
        ).animate().fadeIn(),

        Gap(30),

      ],
    ),
  );
}

Widget _about(bool isWide) {
  return Container(
    padding: const EdgeInsets.all(30),
    width: isWide ? 750 : 350,
    decoration: BoxDecoration(
      color: AppColors.color141718.withValues(alpha: 0.08),
      borderRadius: BorderRadius.circular(20),
      border: Border.all(color: AppColors.color797979.withValues(alpha: 0.12)),
      boxShadow: [
        BoxShadow(
          color: AppColors.themeColor.withValues(alpha: 0.15),
          blurRadius: 40,
          spreadRadius: 2,
        ),
      ],
    ),
    child: Column(
      children: [
        Text(
          "About Me",
          style: dmSansW700.copyWith(fontSize: 28, color: AppColors.white),
        ),
        Gap(14),
        Text(
          "A Flutter Developer who builds modern mobile & web apps with clean architecture, GetX state management, animations, API integration, Firebase and pixel-perfect responsive UI.",
          textAlign: TextAlign.center,
          style: dmSansW400.copyWith(color: AppColors.color797979, height: 1.5),
        ),
      ],
    ),
  ).animate().fadeIn().moveY(begin: 20);
}

Widget _services() {
  return Column(
    children: [
      Text(
        "Services",
        style: TextStyle(
          color: Colors.white,
          fontSize: 28,
          fontWeight: FontWeight.bold,
        ),
      ),
      const Gap(30),
      Wrap(
        spacing: 20,
        runSpacing: 20,
        alignment: WrapAlignment.center,
        children: const [
          _GlowCard(
            icon: Icons.phone_android,
            title: "Flutter Apps",
            desc: "High-quality mobile apps with optimized UI.",
          ),
          _GlowCard(
            icon: Icons.web,
            title: "Web Apps",
            desc: "Fully responsive Flutter web experiences.",
          ),
          _GlowCard(
            icon: Icons.api,
            title: "API + Firebase",
            desc: "Secure API integration & Firebase backend.",
          ),
        ],
      ),
    ],
  );
}

Widget _projects() {
  return Column(
    children: [
      Text(
        "Projects",
        style: TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.bold,
          color: Colors.white,
        ),
      ),
      Gap(30),
      Wrap(
        spacing: 20,
        runSpacing: 20,
        children: [
          GlassCard(title: "Finance Manager", subtitle: "Flutter • Firebase"),
          GlassCard(title: "My Portfolio", subtitle: "Flutter Web"),
          GlassCard(title: "Shopping App", subtitle: "API • Cart • Orders"),
        ],
      ),
    ],
  );
}

Widget _skills(bool isWide) {
  final skills = [
    "Flutter",
    "Dart",
    "GetX",
    "Firebase",
    "REST API",
    "UI/UX",
    "Git",
  ];

  return Column(
    children: [
      Text(
        "Skills",
        style: TextStyle(
          fontSize: 28,
          fontWeight: FontWeight.bold,
          color: Colors.white,
        ),
      ),
      const Gap(30),
      Wrap(
        spacing: 12,
        runSpacing: 12,
        alignment: WrapAlignment.center,
        children: skills.map((skill) {
          return Chip(
            label: Text(skill),
            backgroundColor: Colors.indigo.shade600,
            labelStyle: const TextStyle(color: Colors.white),
          ).animate().fadeIn().scale();
        }).toList(),
      ),
    ],
  );
}

Widget _contact() {
  return Container(
    padding: const EdgeInsets.all(40),
    decoration: BoxDecoration(
      gradient: LinearGradient(
        colors: [Colors.indigo.shade600, Colors.indigo.shade900],
      ),
      borderRadius: BorderRadius.circular(20),
    ),
    child: Column(
      children: [
        const Text(
          "Let's Work Together",
          style: TextStyle(
            color: Colors.white,
            fontSize: 28,
            fontWeight: FontWeight.bold,
          ),
        ),
        const Gap(10),
        const Text(
          "Available for freelance & full-time opportunities.",
          style: TextStyle(color: Colors.white70),
        ),
        const Gap(20),
        ElevatedButton(
          onPressed: () => launchUrl(Uri.parse("mailto:bhavya@gmail.com")),
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.white,
            foregroundColor: Colors.indigo,
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
          ),
          child: const Text("Contact Me"),
        ),
      ],
    ),
  );
}

class _GlowCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String desc;

  const _GlowCard({
    required this.icon,
    required this.title,
    required this.desc,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 280,
      padding: const EdgeInsets.all(22),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(18),
        color: AppColors.white.withValues(alpha: 0.7),
        boxShadow: [
          BoxShadow(
            color: AppColors.themeColor.withValues(alpha: 0.25),
            blurRadius: 25,
            spreadRadius: 2,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, size: 40, color: AppColors.themeColor),
          const SizedBox(height: 14),
          Text(
            title,
            style: dmSansW600.copyWith(
              fontSize: 20,
              color: AppColors.color1F4B82,
            ),
          ),
          const SizedBox(height: 10),
          Text(
            desc,
            style: dmSansW400.copyWith(
              color: AppColors.color797979,
              fontSize: 14,
            ),
          ),
        ],
      ),
    ).animate().fadeIn().moveY(begin: 20);
  }
}

Widget _section(HomeController c, int index, Widget child) {
  return Container(
    padding: const EdgeInsets.symmetric(vertical: 60, horizontal: 20),
    key: c.sectionKeys[index],
    child: child,
  );
}

List<Widget> _navButtons(HomeController c) {
  final items = ["Home", "About", "Services", "Projects", "Skills", "Contact"];

  return items.asMap().entries.map((e) {
    return TextButton(
      onPressed: () => c.scrollToSection(e.key),
      child: Text(
        e.value,
        style: const TextStyle(color: Colors.white, fontSize: 16),
      ),
    );
  }).toList();
}

Widget _drawerNav(HomeController c) {
  final items = ["Home", "About", "Services", "Projects", "Skills", "Contact"];

  return ListView(
    padding: const EdgeInsets.all(20),
    children: items.asMap().entries.map((e) {
      return ListTile(
        title: Text(e.value, style: const TextStyle(color: Colors.white)),
        onTap: () {
          Navigator.pop;
          c.scrollToSection(e.key);
        },
      );
    }).toList(),
  );
}
