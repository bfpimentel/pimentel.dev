import 'package:flutter/widgets.dart';
import 'package:portfolio/widgets/profile_info.dart';
import 'package:portfolio/widgets/profile_title.dart';
import 'package:portfolio/widgets/social_group.dart';

class MobileHome extends StatelessWidget {
  const MobileHome();

  @override
  Widget build(final BuildContext context) {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          const ProfileTitle(),
          const ProfileInfo(),
          const SocialGroup(),
        ],
      ),
    );
  }
}
