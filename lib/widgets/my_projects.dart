import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../core/constants.dart';

class MyProjects extends StatelessWidget {
  const MyProjects();

  @override
  Widget build(final BuildContext context) {
    return Container(
      width: 400,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text('Things I am proud of and my evolution:'),
          _HyperlinkedText(text: '[October/2018] Guidelines App: My First App on Github.', url: Links.guideline),
          _HyperlinkedText(text: "[December/2019] Kotlin Mentoring: Some important topics that I wrote about and lectured to my work partners.", url: Links.mentoring),
          _HyperlinkedText(text: "[December/2019] Marvel App: Android App using Marvel's API, Clean Architecture and Travis CI.", url: Links.marvel),
          _HyperlinkedText(text: "[January/2020] Android Docker Images: Repository with some Docker images for Android CI.", url: Links.dockerImages),
          _HyperlinkedText(text: '[March/2020] Portfolio: This page, made with Flutter Web and Github Actions.', url: Links.portfolio)
        ],
      ),
    );
  }
}

class _HyperlinkedText extends StatelessWidget {
  const _HyperlinkedText({
    @required this.text,
    @required this.url,
  });

  final String text;
  final String url;

  @override
  Widget build(final BuildContext context) {
    return FlatButton(
      onPressed: () async {
        if (await canLaunch(url)) {
          await launch(url);
          return;
        }
      },
      padding: EdgeInsets.fromLTRB(0, 8, 0, 8),
      child: Text(
        text,
        style: TextStyle(
          color: Colors.blue,
          decoration: TextDecoration.underline,
        ),
      ),
    );
  }
}
