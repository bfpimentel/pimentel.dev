import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/core/constants.dart';
import 'package:portfolio/widgets/image_button.dart';

class SocialGroup extends StatelessWidget {
  const SocialGroup();

  @override
  Widget build(final BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(32.0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          const ImageButton(
            assetName: Images.github,
            urlAddress: Links.github,
          ),
          Padding(padding: EdgeInsets.all(12)),
          const ImageButton(
            assetName: Images.linkedIn,
            urlAddress: Links.linkedIn,
          ),
          Padding(padding: EdgeInsets.all(12)),
          const ImageButton(
            assetName: Images.gmail,
            mailAddress: Links.gmail,
          ),
          Padding(padding: EdgeInsets.all(12)),
          const ImageButton(
            assetName: Images.instagram,
            urlAddress: Links.instagram,
          ),
          Padding(padding: EdgeInsets.all(12)),
          const ImageButton(
            assetName: Images.facebook,
            urlAddress: Links.facebook,
          ),
        ],
      ),
    );
  }
}
