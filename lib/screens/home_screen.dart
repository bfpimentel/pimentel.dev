import 'package:flutter/material.dart';
import 'package:portfolio/widgets/my_projects.dart';
import 'package:portfolio/widgets/profile_title.dart';
import 'package:portfolio/widgets/profile_info.dart';
import 'package:portfolio/widgets/social_group.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen();

  @override
  Widget build(final BuildContext context) {
    const divider = const Divider(height: 32);

    return Container(
      color: Color(0xFF191919),
      child: SingleChildScrollView(
        padding: EdgeInsets.all(32),
        child: Column(
          children: <Widget>[
            const ProfileTitle(),
            divider,
            const ProfileInfo(),
            divider,
            const MyProjects(),
            divider,
            const SocialGroup(),
          ],
        ),
      ),
    );
  }
}
