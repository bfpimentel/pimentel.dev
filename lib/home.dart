import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({
    final Key key,
  }) : super(key: key);

  @override
  Widget build(final BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: 400,
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Container(
                width: 75,
                height: 75,
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  image: const DecorationImage(
                    fit: BoxFit.fill,
                    image: const ExactAssetImage('./assets/profile.jpg'),
                  ),
                ),
              ),
              const Padding(padding: const EdgeInsets.only(top: 24)),
              Text(
                'Bruno Pimentel',
                style: Theme.of(context).textTheme.headline4,
              ),
              const Padding(padding: const EdgeInsets.only(top: 24)),
              Text(
                'Brazilian, 21yo.\n'
                'Fast learner and self-taught.\n'
                'I seek getting better day after day.\n'
                'Working to influence people positively.',
                style: Theme.of(context).textTheme.bodyText1,
              ),
              const Padding(padding: const EdgeInsets.only(top: 24)),
              Text(
                'I have been working with Kotlin/Java Android development '
                'with well-known APIs such as RxJava, Retrofit2, Dagger2, JUnit, etc. '
                'all inside MVP and MVVM architectures and covered by SonarQube.',
                style: Theme.of(context).textTheme.bodyText1,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
