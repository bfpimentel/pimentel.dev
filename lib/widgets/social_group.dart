import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/core/constants.dart';
import 'package:url_launcher/url_launcher.dart';

class SocialGroup extends StatelessWidget {
  const SocialGroup();

  @override
  Widget build(final BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: <Widget>[
        const _ImageButton(
          assetName: Images.github,
          urlAddress: Links.github,
        ),
        Padding(padding: EdgeInsets.all(12)),
        const _ImageButton(
          assetName: Images.linkedIn,
          urlAddress: Links.linkedIn,
        ),
        Padding(padding: EdgeInsets.all(12)),
        const _ImageButton(
          assetName: Images.gmail,
          mailAddress: Links.gmail,
        ),
        Padding(padding: EdgeInsets.all(12)),
        const _ImageButton(
          assetName: Images.instagram,
          urlAddress: Links.instagram,
        ),
        Padding(padding: EdgeInsets.all(12)),
        const _ImageButton(
          assetName: Images.facebook,
          urlAddress: Links.facebook,
        ),
      ],
    );
  }
}

class _ImageButton extends StatelessWidget {
  const _ImageButton({
    @required final this.assetName,
    final this.urlAddress,
    final this.mailAddress,
  });

  final String assetName;
  final String urlAddress;
  final String mailAddress;

  void _handleOnPressed() async {
    if (urlAddress != null && await canLaunch(urlAddress)) {
      await launch(urlAddress);
      return;
    }

    if (mailAddress != null) {
      final subject = 'Hello, Bruno!';
      final address = 'mailto:$mailAddress?subject=$subject';
      if (await canLaunch(address)) {
        await launch(address);
      }
    }
  }

  @override
  Widget build(final BuildContext context) {
    return SizedBox(
      width: 40,
      height: 40,
      child: FloatingActionButton(
        onPressed: _handleOnPressed,
        child: Container(
          width: 24,
          height: 24,
          decoration: BoxDecoration(
            image: DecorationImage(
              image: ExactAssetImage(assetName),
            ),
          ),
        ),
      ),
    );
  }
}
