{
  description = "pimentel.dev Dev Environment";

  inputs.nixpkgs.url = "nixpkgs/nixpkgs-unstable";

  outputs =
    { self, nixpkgs }:
    let
      supportedSystems = [
        "aarch64-darwin"
      ];
      forEachSupportedSystem =
        f: nixpkgs.lib.genAttrs supportedSystems (system: f { pkgs = import nixpkgs { inherit system; }; });
    in
    {
      devShells = forEachSupportedSystem (
        { pkgs }:
        {
          default = pkgs.mkShellNoCC {
            packages = with pkgs; [
              nodejs_24
              nodePackages.prettier
            ];
          };
        }
      );
    };
}
