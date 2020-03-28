import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class ProfileInfo extends StatelessWidget {
  const ProfileInfo();

  @override
  Widget build(final BuildContext context) {
    final birthDate = DateTime(1998, 04, 22).toUtc();
    final today = DateTime.now().toUtc();
    final yearsOld = (today.difference(birthDate).inDays / 365).floor();

    return Container(
      width: 400,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text(
            'Brazilian, ${yearsOld}yo.\n'
            'Fast learner and self-taught.\n'
            'I seek getting better day after day.\n'
            'Working to influence people positively.',
            style: Theme.of(context).textTheme.bodyText1,
          ),
          Container(height: 24),
          Text(
            'I have been working with Kotlin/Java Android development '
            'with well-known APIs such as RxJava, Retrofit2, Dagger2, JUnit, etc. '
            'all inside MVP and MVVM architectures and covered by SonarQube.',
            style: Theme.of(context).textTheme.bodyText1,
          ),
        ],
      ),
    );
  }
}
