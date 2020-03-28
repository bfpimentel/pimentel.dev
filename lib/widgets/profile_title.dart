import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:portfolio/core/constants.dart';

class ProfileTitle extends StatelessWidget {
  const ProfileTitle();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: <Widget>[
          Container(
            width: 75,
            height: 75,
            decoration: const BoxDecoration(
              shape: BoxShape.circle,
              image: const DecorationImage(
                fit: BoxFit.fill,
                image: const ExactAssetImage(Images.profile),
              ),
            ),
          ),
          Container(height: 16),
          Text(
            'Bruno Pimentel',
            style: Theme.of(context).textTheme.headline4,
          ),
        ],
      ),
    );
  }
}
