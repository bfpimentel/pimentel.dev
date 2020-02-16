import 'package:flutter/cupertino.dart';

import 'image_button.dart';

class SocialGroup extends StatelessWidget {
  const SocialGroup();

  @override
  Widget build(final BuildContext context) {
    return Row(
      children: <Widget>[
        const ImageButton(
          assetName: 'assets/github.png',
          urlAddress: 'https://github.com/bfpimentel/',
        ),
        Padding(padding: EdgeInsets.only(left: 12)),
        const ImageButton(
          assetName: 'assets/linkedin.png',
          urlAddress: 'https://linkedin.com/in/bfpimentel/',
        ),
        Padding(padding: EdgeInsets.only(left: 12)),
        const ImageButton(
          assetName: 'assets/gmail.png',
          mailAddress: 'bruno@pimentel.dev',
        ),
        Padding(padding: EdgeInsets.only(left: 12)),
        const ImageButton(
          assetName: 'assets/instagram.png',
          urlAddress: 'https://instagram.com/pimentel.dev/',
        ),
        Padding(padding: EdgeInsets.only(left: 12)),
        const ImageButton(
          assetName: 'assets/facebook.png',
          urlAddress: 'https://facebook.com/bfpimentel/',
        ),
      ],
    );
  }
}
