import 'package:bhavya_giniya_portfolio/helpers/AppColors.dart';
import 'package:bhavya_giniya_portfolio/helpers/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';

class GlassCard extends StatelessWidget {
  final String title;
  final String subtitle;

  GlassCard({super.key, required this.title, required this.subtitle});

  final RxBool _isHover = false.obs;
  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => _isHover.value = true,
      onExit: (_) => _isHover.value = false,
      cursor: SystemMouseCursors.click,
      child: Obx(() {
        final hover = _isHover.value;
        final bg = AppColors.color141718.withValues(alpha: 0.06);
        final border = AppColors.colorF2F3F6.withValues(alpha: 0.12);

        return AnimatedContainer(
          duration: const Duration(milliseconds: 260),
          width: 280,
          padding: const EdgeInsets.all(20),
          transform: hover
              ? (Matrix4.identity()
                  ..translate(0, -6)
                  ..scale(1.02))
              : Matrix4.identity(),
          decoration: BoxDecoration(
            color: bg,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: border),
            boxShadow: hover
                ? [
                    BoxShadow(
                      color: AppColors.themeColor.withValues(alpha: 0.25),
                      blurRadius: 20,
                      offset: const Offset(0, 12),
                    ),
                  ]
                : [
                    BoxShadow(
                      color: AppColors.color262626.withValues(alpha: .12),
                      blurRadius: 8,
                      offset: const Offset(0, 6),
                    ),
                  ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: dmSansW700.copyWith(
                  fontSize: 18,
                  color: AppColors.colorF6F6F6,
                ),
              ),
              const Gap(8),
              Text(
                subtitle,
                style: dmSansW400.copyWith(
                  color: AppColors.colorF6F6F6.withValues(alpha: 0.8),
                  fontSize: 14,
                ),
              ),
              const Gap(12),
              Row(
                children: [
                  ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.themeColor,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 10,
                      ),
                    ),
                    child: const Text(
                      'View',
                      style: TextStyle(color: AppColors.colorFBFBFB),
                    ),
                  ),
                  const Gap(10),
                  OutlinedButton(
                    onPressed: () {},
                    style: OutlinedButton.styleFrom(
                      side: BorderSide(
                        color: AppColors.colorF2F3F6.withValues(alpha: 0.12),
                      ),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                      padding: const EdgeInsets.symmetric(
                        horizontal: 16,
                        vertical: 10,
                      ),
                    ),
                    child: Text(
                      'Code',
                      style: dmSansW400.copyWith(
                        color: AppColors.colorF6F6F6.withValues(alpha: 0.7),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ).animate().fadeIn(duration: 400.ms);
      }),
    );
  }
}
