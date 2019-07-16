#include "ofMain.h"
#include "ofApp.h"

//========================================================================
int main( ){
    // artloop uses a vertical screen display
	ofSetupOpenGL(1080,1920,OF_FULLSCREEN);
	ofRunApp(new ofApp);
}
