# Notes

## Packaging environment

The agent initially cannot access `/var/run/docker.sock`, including outside its filesystem sandbox. The host Node version is v26.12.0; the image will use Node 22. Docker checks must be run with working Docker access before claiming I1–I15 pass.
