import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

import 'desktop_home.dart';
import 'mobile_home.dart';

class Home extends StatelessWidget {
  const Home();

  @override
  Widget build(final BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, sizingInformation) => Scaffold(
        body: ListView(
          children: <Widget>[
            Expanded(
              child: ScreenTypeLayout(
                mobile: const MobileHome(),
                desktop: const DesktopHome(),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
