import 'package:flutter/widgets.dart';
import 'package:portfolio/widgets/profile_info.dart';
import 'package:portfolio/widgets/profile_title.dart';
import 'package:portfolio/widgets/social_group.dart';

class DesktopHome extends StatelessWidget {
  const DesktopHome();

  @override
  Widget build(final BuildContext context) {
    return Column(
      children: <Widget>[
        const ProfileTitle(),
        const ProfileInfo(),
        const SocialGroup(),
      ],
    );
  }
}
